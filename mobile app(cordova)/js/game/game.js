let game = function()
{
    let game = 
    {
        start_game()
        {
            let game_state = store.get("game_state");
            let menu = store.get("game_menu");
            if(game_state =="start" && menu == "quiz")
            {
                this.show.call(this);
                store.set({tabs_state:"off"});
                this.startTimer();
            }
            
        },
        close_game()
        {
            store.set({game_state:"end"});
            store.set({tabs_state:"on"});
            clearInterval(gameInreval);
        },
        close_game_menu()
        {
            store.set({game_menu_state:"off"});
        },
        show()
        {
            let content = this.get_content_game_html.call(this);
            $("#content").html(content);
        },

        startTimer() {
            store.set({currentGameTime: 5*60})
            window.gameInreval = setInterval(()=> {
                let currentTime = store.get('currentGameTime')
                store.set({currentGameTime: currentTime - 1})
                if(currentTime < 1) {
                    clearInterval(gameInreval);
                }
            }, 1000)
        },

        setTimeToHTML(time) {
            let minutes = Math.floor(time/60);
            let seconds = Math.floor(time%60);
            minutes = minutes < 10?`0${minutes}`: minutes;
            seconds = seconds < 10?`0${seconds}`: seconds;
            $('.timer_game').text(`${minutes}:${seconds}`);
        },

        show_menu()
        {
            let menu = store.get("game_menu");
            if(menu == "quiz")
            {
                let content = this.get_content_menu_html.call(this);
                $("#content").html(content);
            }
            
        },
        get_content_menu_html()
        {
            let html = `<div class="content_game_menu">
                    
            
            <div class="head_content"> 
                <div id="game_menu_name" > Викторина</div>
                <div id="island_html_name_close" class="island_html_close"  > 
                    <img class="island_html_close" close_game_menu src="img/html_island/close.png"> 
                </div>
            </div>
            <div class="middle_game_menu">
                <div class="gamer gamer_main gamer_menu">
                        <div class="gamer_foto"><img src="img/game/person_1.png"></div>
                        <div class="gamer_login" >${store.get("userData").nick_name}</div>
                    
                </div>
                <div class="currency_game">
                    <div class="currency_game_lbl">Валюта</div>
                    <div class="currency_game_value">
                        <span>300</span>
                    </div>
                </div>
                <div class="add_person_game">
                    <div class="add_plus"><img src="img/add.png"></div>
                    <div class="add_person_game_txt">пригласить друга</div>
                </div>
                <div class="game_select">
                    <div class="game_select_left">
                    </div>
                    <div class="game_select_item">
                        общие знания
                    </div>
                    <div class="game_select_right">
                    </div>
                </div>
                <div class="start_game" start_game >
                    <div class="start_game_txt">Играть</div>
                </div>
            </div>
            
            <div class="bottom_game">
                
                
            </div>
            
        </div>`;
            return html;
        },

        setDefaultState() {
            $('[ans]').attr('answer_state', 'off')
        },

        setActive(event) {
            const {target} = event;
            console.log(target);
            this.setDefaultState();
            $(target).parent().attr('answer_state', 'on');
            setTimeout(()=> {
                game.setDefaultState();
                game.setSecondPart();
                $("#question_name").text('Вопрос 2/15');
            }, 1000);
        },

        setSecondPart() {
            const container = $('.middle_game');
            container.html(
                `
                <div class="persons_game">
                        <div class="gamer gamer_main">
                            <div class="gamer_foto"><img src="img/game/person_1.png"></div>
                            <div class="gamer_answer" answer_person_state = "ok"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_2.png"></div>
                            <div class="gamer_answer" answer_person_state = "ok"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_3.png"></div>
                            <div class="gamer_answer" answer_person_state = "write"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_4.png"></div>
                            <div class="gamer_answer" answer_person_state = "write"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_5.png"></div>
                            <div class="gamer_answer" answer_person_state = "not"></div>
                        </div>

                    </div>
                    <div class="question_text">
                    Корневой обьект браузера?
                    </div>
                    <div class="answer_list" ans="1">
                        <div class="answer_item">
                            <div class="answer_number">1</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'window'}</div>
                            </div>
                            
                        </div>
                        <div class="answer_item" ans="2">
                            <div class="answer_number">2</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'global'}</div>
                            </div>
                            
                        </div>
                        <div class="answer_item" ans="3">
                            <div class="answer_number" ans="3">3</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'body'}</div>
                            </div>
                            
                        </div>
                        <div class="answer_item" ans="4">
                            <div class="answer_number">4</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'document'}</div>
                            </div>                            
                        </div>
                    </div>
                `
            )
        },

        get_content_game_html()
        {
            let html = `<div id="content" class="content">
            <div class="content_game">
                <div class="game_top">
                    <div class="life_game">
                        <img class="heart" heart_state = "full" src="img/game/heart_empty.png">
                        <img class="heart" heart_state = "full" src="img/game/heart_empty.png">
                        <img class="heart" heart_state = "empty" src="img/game/heart_empty.png">
                    </div>
                    <div class="timerContainer">
                        <div class="timer_game"></div>
                    </div>                    
                    <div class="close_game" close_game>
                        <img src="img/game/close.png">
                    </div>
                </div>
                <div id="question_name" class="head_content"> Вопрос 1/15
                </div>
                <div class="middle_game">
                    <div class="persons_game">
                        <div class="gamer gamer_main">
                            <div class="gamer_foto"><img src="img/game/person_1.png"></div>
                            <div class="gamer_answer" answer_person_state = "ok"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_2.png"></div>
                            <div class="gamer_answer" answer_person_state = "ok"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_3.png"></div>
                            <div class="gamer_answer" answer_person_state = "write"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_4.png"></div>
                            <div class="gamer_answer" answer_person_state = "write"></div>
                        </div>
                        <div class="gamer">
                            <div class="gamer_foto"><img src="img/game/person_5.png"></div>
                            <div class="gamer_answer" answer_person_state = "not"></div>
                        </div>

                    </div>
                    <div class="question_text">
                    Как сделать текст жирным?
                    </div>
                    <div class="answer_list" ans="1">
                        <div class="answer_item">
                            <div class="answer_number">1</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'С помощью тега "strong"'}</div>
                            </div>
                            
                        </div>
                        <div class="answer_item" ans="2">
                            <div class="answer_number">2</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'С помощью тега "b"'}</div>
                            </div>
                            
                        </div>
                        <div class="answer_item" ans="3">
                            <div class="answer_number" ans="3">3</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'С помощью тега "p"'}</div>
                            </div>
                            
                        </div>
                        <div class="answer_item" ans="4">
                            <div class="answer_number">4</div>
                            <div class="answer_item_bg" ans answer_state="off">
                                <div class="answer_item_text">${'С помощью тега "a"'}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div class="bottom_game">
                    
                    
                </div>
                <div id="person_helper_place" class="person_helper_place">
                    <div class="person_helper" helper_state="on">
                        <img class="person_helper_img" src="img/person_helper/bag.png">
                        <img helper_close class="person_helper_close" src="img/person_helper/close.png">
                        <div class="text_helper_block">
                            <div class="text_helper">выпей ароматного кофе и <br>хорошенько подумай над<br> ответом</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
            return html;
        },

        loader: function (url, callbackSuccess, callbackError, argsSuccess, argsError) {
			$.ajax({
				url: url,
				crossDomain: true,
				dataType: "json",
				type: "GET",
				async: true,
				cashe: false,
                // LOGS
                beforeSend: function () {
                    // requestTime = Date.now();
                },
				success: function success(data) {
					$("#connectError").css("opacity", 0);
					callbackSuccess(data, argsSuccess);
                    // LOGS
                    // responseTime = Date.now();
                    // syncTimer(data);
                    // sendLogs(data);
				},
				error: function error(err) {
					if (callbackError) callbackError(argsError);
					console.log("err= "+ err);
					$("#connectError").css("opacity", 1);
				}
			});
		},
    };
    return game;
}()