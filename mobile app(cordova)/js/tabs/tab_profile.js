let tab_profile = function()
{
    let tab_profile =
    {
        name : "tab_profile",
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
            $("#tab_profile").addClass("tab_on");
            $("#tab_intern").removeClass("tab_on");
            $("#tab_island").removeClass("tab_on");
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
            let html = `<div class="content_profile">
            <div id="profile_name" class="head_content"> Vasya_322
            </div>
            <div class="middle_profile">
                <div id="setting_profile" class="middle_profile_item_2">
                    <div class="setting_profile">
                        <img src="img/setting.png">
                    </div>
                </div>
                <div class="middle_profile_item_1">
                    <div id="foto_profile" class="foto_profile">
                        <img src="img/foto.png">
                    </div>
                </div>
                <div id="mail_profile" class="middle_profile_item_2">
                    <div class="mail_profile">
                        <img src="img/mail.png">
                    </div>
                </div>
            </div>
            <div class="bottom_profile">
                <div class="lbl_profile ">Класс</div>
                <div class="value_profile little_bg_profile">IT</div>
                <div class="lbl_profile">Скиллы</div>
                <div class="value_profile little_bg_profile">5</div>
                <div class="lbl_profile">Рейтинг</div>
                <div class="value_profile big_bg_profile">1050</div>
                <div class="lbl_profile">Друзья online</div>
                <div class="value_profile middle_bg_profile">2/5</div>
            </div>
        </div>`;
            return html;
        }
    };
    return tab_profile;
}()