let tab_forum = function()
{
    let tab_forum =
    {
        name : "tab_forum",
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
            $("#tab_forum").addClass("tab_on");
            $("#tab_island").removeClass("tab_on");
            $("#tab_profile").removeClass("tab_on");
            $("#tab_event").removeClass("tab_on");
            $("#tab_game").removeClass("tab_on");
            $("#tab_intern").removeClass("tab_on");
        },
        content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
            this.getForumData();
        },

        formForumElements(data) {
            let elements = ''
            data.forEach(({name, message_count}) => {
                elements += `
                <div class="forum_item" >
                    <div class="forum_item_state" forum_state="${message_count > 0? 'num' : 'empty'}">${message_count}</div>
                    <div class="${name.length <= 10 ? 'min_1': 'mid_1' }">                        
                        <div class="forum_item_text">${name}</div>
                    </div>
                </div>
                `
            });
            elements += `
            <div class="forum_item " >
                <div class="add_forum_item">
                    <img src="img/island/isl_add.png">
                </div>
            </div>`
            return elements;
        },

        getForumData() {
            game.loader('http://game-api.na4u.ru/api/communication', this.setForumData);
        },

        setForumData(data) {
            const containerElement = $('.middle_forum');
            containerElement.html(tab_forum.formForumElements(data));
        },

        get_content_html()
        {
            let html = `<div class="content_forum">
                    
            <div class="head_content_filter"> 
                <div id="hc_forum_name" class="forum_name">Форум</div>
                <div id="hc_forum_filter" class="forum_filter_btn"  > 
                    <img class="forum_filter_img" forum_filter src="img/company/filter.png"> 
                </div>                
            </div>
            
            <div class="middle_forum"></div>
            
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
                <div class="person_helper" helper_state="off">
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
    return tab_forum;
}()