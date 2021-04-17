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
        async content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
            this.getPersonalData();
        },

        getPersonalData() {
            game.loader('http://game-api.na4u.ru/api/user', this.setUserData);
        },

        setUserData(data) {
            store.set({userData:data})
            $('#profile_name').text(data.nick_name);
            $('#userTypeClass').text(data.class_type);
            $('#userSkills').text(data.skill_count);
            $('#userRaiting').text(data.rating);
            $('#userFriends').text(`${data.friends_online}/${data.friends_count}`);
            $('#achievement_count').text(`${data.achievement_count}`);
            $('#internship_count').text(`${data.internship_count}`);
        },

        get_content_html(userData)
        {
            let html = `<div class="content_profile">
            <div id="profile_name" class="head_content">
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
                <div class="value_profile little_bg_profile" id="userTypeClass"></div>
                <div class="lbl_profile">Скиллы</div>
                <div class="value_profile little_bg_profile" id="userSkills"></div>
                <div class="lbl_profile">Рейтинг</div>
                <div class="value_profile big_bg_profile" id="userRaiting"></div>
                <div class="lbl_profile">Друзья online</div>
                <div class="value_profile middle_bg_profile" id="userFriends"></div>
                <div class="lbl_profile">Достижения</div>
                <div class="value_profile little_bg_profile" id="achievement_count"></div>
                <div class="lbl_profile">Стажировки</div>
                <div class="value_profile little_bg_profile" id="internship_count"></div>
                <div></div>
                <div class="value_profile big_bg_profile" id="userFriends">Резюме</div>
            </div>
        </div>`;
            return html;
        }
    };
    return tab_profile;
}()

