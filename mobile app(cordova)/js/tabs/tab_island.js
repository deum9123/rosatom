let tab_island = function()
{
    let tab_island =
    {
        name : "tab_island",
        theme_name : "blue",
        show()
        {
            let tab = store.get("tab");
            
            if(tab == this.name)
            {
                store.set({theme_name: this.theme_name});
                this.tab_on.call(this);
                this.content_show.call(this);
            }
        },
        close()
        {
            store.set({tab:"tab_island"});
            
            store.set({tabs_state:"on"});
        },
        set_island(name, title)
        {
            store.set({currentIslandTitle: $(title.target).attr('islandName')})
            store.set({island:name});
            store.set({tabs_state:"off"});
        },
        tab_on()
        {
            $("#tab_island").addClass("tab_on");
            $("#tab_intern").removeClass("tab_on");
            $("#tab_profile").removeClass("tab_on");
            $("#tab_event").removeClass("tab_on");
            $("#tab_forum").removeClass("tab_on");
            $("#tab_game").removeClass("tab_on");
        },
        content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
            this.getIslandsData();
        },

        moveToFirstStep() {
            $('.middle_island').attr('step','1');
            $("#IslandstepValue").text('1/2');
        },

        moveToSecondStep() {
            $('.middle_island').attr('step','2');
            $("#IslandstepValue").text('2/2');
        },

        getIslandsData() {
            game.loader('http://game-api.na4u.ru/api/islands', this.setIslandData);
        },

        setIslandData(data) {
            data.forEach(({island_name, task_count, done_task_count}, index) => {
                $(`.isl_name_${index + 1}`).text(island_name);
                $(`.isl_rating_${index + 1}`).text(`${done_task_count}/${task_count}`);
                $( 'img', `.isl_${index + 1}`).attr('islandName', island_name);
            });
        },

        get_content_html()
        {
            
            let res = `<div class="content_island">
                    <div id="island_name" class="head_content"> Обучение
                    </div>
                    <div class="middle_island_container">
                        <div class="middle_island" step="1">
                            <div class="isl_1">
                                <div class="isl_name_1"></div>
                                <div class="isl_rating_1"></div>
                                <img html_island class="island_img" src="img/island/isl_1.png">
                            </div>
                            <div class="isl_2">
                                <div class="isl_name_2"></div>
                                <div class="isl_rating_2"></div>
                                <img java_island class="island_img" src="img/island/isl_2.png">
                            </div>
                            <div class="isl_3">
                                <div class="isl_name_3"></div>
                                <div class="isl_rating_3"></div>
                                <img eng_island class="island_img" src="img/island/isl_3.png">
                            </div>
                            <div class="isl_4">
                                <div class="isl_name_4"></div>
                                <div class="isl_rating_4"></div>
                                <img mathan_island class="island_img" src="img/island/isl_4.png">
                            </div>
                            <div class="isl_5">
                                <div class="isl_name_5"></div>
                                <div class="isl_rating_5"></div>
                                <img sopr_island class="island_img" src="img/island/isl_5.png">
                            </div>
                            <div class="isl_6">
                                <div class="isl_name_6"></div>
                                <div class="isl_rating_6"></div>
                                <img sopr_island class="island_img" src="img/island/isl_1.png">
                            </div>
                            <div class="add_island_btn">
                            </div>
                        </div>
                    </div>
                    
                    <div class="bottom_island">
                        
                        <div class="bottom_left" id="islands_bottom_left">                            
                            <div class="bottom_left_txt">Влево</div>
                            <div class="bottom_left_img"></div>
                        </div>
                        <div class="bottom_center" id="IslandstepValue">
                            1/2
                        </div>
                        <div class="bottom_right" id="islands_bottom_right">
                            <div class="bottom_right_txt">Вправо</div>
                            <div class="bottom_right_img"></div>
                        </div>
                    </div>
                    <div id="person_helper_place" class="person_helper_place">
                        <div class="person_helper" helper_state="on">
                            <img  class="person_helper_img" src="img/person_helper/bag.png">
                            <img helper_close class="person_helper_close" src="img/person_helper/close.png">
                            <div class="text_helper_block">
                                <div class="text_helper">продвигаясь по островам<br>обучения, ты будешь<br> получать крутые ивенты.</div>
                                
                            </div>
                        </div>
                    </div>
                </div>`;
            return res;
        }
    };
    return tab_island;
}()