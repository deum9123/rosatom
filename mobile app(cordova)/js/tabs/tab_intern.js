let tab_intern = function()
{
    let tab_intern =
    {
        name : "tab_intern",
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
            $("#tab_intern").addClass("tab_on");
            $("#tab_island").removeClass("tab_on");
            $("#tab_profile").removeClass("tab_on");
            $("#tab_event").removeClass("tab_on");
            $("#tab_forum").removeClass("tab_on");
            $("#tab_game").removeClass("tab_on");
        },
        content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
        },
        get_content_html()
        {
            let html = `<div class="content_company">
                    
            <div class="head_content_filter"> 
                <div id="hc_company_name" class="company_name"> Компании</div>
                <div id="hc_company_filter" class="company_filter_btn"  > 
                    <img class="company_filter_img" company_filter src="img/company/filter.png"> 
                </div>
                
            </div>
            
            <div class="middle_company">
                <div class="mid_1">ГОСКОРПОРАЦИЯ «РОСАТОМ»</div>
                <div class="min_1">АО «РАСУ»</div>
                <div class="min_3">АО «В/О «ИЗОТОП»</div>
                <div class="min_2">АО «НИИТФА»</div>
                <div class="big_1">КОРПОРАТИВНАЯ АКАДЕМИЯ РОСАТОМА</div>
                <div class="mid_1">ООО «НИИАР-ГЕНЕРАЦИЯ»</div>

            </div>
            
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
            
        </div>`;
            return html;
        }
    };
    return tab_intern;
}()