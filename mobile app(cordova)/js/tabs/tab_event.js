let tab_event = function()
{
    let tab_event =
    {
        name : "tab_event",
        theme_name : "common",
        show()
        {
            let tab = store.get("tab");
            
            if(tab == this.name)
            {
                store.set({theme_name:this.theme_name});
                this.tab_on.call(this);
                this.content_show.call(this);
            }
        },
        tab_on()
        {
            $("#tab_event").addClass("tab_on");
            $("#tab_island").removeClass("tab_on");
            $("#tab_profile").removeClass("tab_on");
            $("#tab_forum").removeClass("tab_on");
            $("#tab_game").removeClass("tab_on");
            $("#tab_intern").removeClass("tab_on");
        },
        content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
            this.getIventsData();
        },

        getIventsData() {
            game.loader('http://game-api.na4u.ru/api/ivents', this.setIventsData);
        },

        setIventsData(data) {
            store.set({eventsData: data});
            const container = $(".middle_event");
            let elements = '';
            data.forEach(({ivent_name, ivent_description, ivent_status, ivent_location, ivent_company, ivent_id}) => {
                const status = ivent_status == 'done'? 'end': 'imp';
                elements += `
                <div class="event_item" event_state="${ivent_status? status : ''}">
                    <div class="event_item_state" event_state="${ivent_status? status : ''}"></div>
                    <div class="${ivent_name.length < 10 ? 'min_1': 'mid_1'}">                        
                        <div class="event_item_text" id="${ivent_id}">${ivent_name}</div>
                    </div>
                </div>
                `
            })
            container.html(elements);
        },

        openEventInfoPopup(event) {
            const {target} = event;
            const id = $(target).attr('id');
            const eventData = store.get("eventsData").find((item)=> item.ivent_id == id);
            $(".eventModal").removeClass('dnone');
            $('.eventModal-title').text(eventData.ivent_name);
            $('.eventModal-city').text(eventData.ivent_location);
            $('.eventModal-company').text(eventData.ivent_company);
            $('.eventModal-hashtags').text(eventData.ivent_tag);
            console.log(eventData);
        },

        closeEventInfoPopup(){
            console.log('work');
            $(".eventModal").addClass('dnone');
        },

        get_content_html()
        {
            let html = `<div class="content_event">
                    
            <div class="head_content_filter"> 
                <div id="hc_event_name" class="event_name"> Ивенты</div>
                <div id="hc_event_filter" class="event_filter_btn"  > 
                    <img class="event_filter_img" event_filter src="img/company/filter.png"> 
                </div>
                
            </div>
            
            <div class="middle_event"></div>
            
            <div class="bottom_island">
                <div class="bottom_left">
                    
                    <div class="bottom_left_txt">Влево</div>
                    <div class="bottom_left_img"></div>
                </div>
                <div class="bottom_center">
                    1/1
                </div>
                <div class="bottom_right">
                    <div class="bottom_right_txt">Вправо</div>
                    <div class="bottom_right_img"></div>
                </div>
                
            </div>
            <div id="person_helper_place" class="person_helper_place">
                <div class="person_helper" helper_state="on">
                    <img  class="person_helper_img" src="img/person_helper/bag.png">
                    <img helper_close class="person_helper_close" src="img/person_helper/close.png">
                    <div class="text_helper_block">
                        <div class="text_helper">похоже, есть компании,<br>где тебя уже ждут.<br> воспользуйся шансом!</div>
                        
                    </div>
                </div>
            </div>
            
        </div>`;
            return html;
        }
    };
    return tab_event;
}()