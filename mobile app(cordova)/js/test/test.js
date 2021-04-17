let test= function()
{
    let test = 
    {
        show()
        {
            let test_state = store.get("test_state");
            if(test_state == "start")
            {
                let content = this.get_content_test_html.call(this);
                $("#content").html(content);
            }
            
        },
        close()
        {
            let test_state = store.get("test_state");
            if(test_state == "end")
            {
                store.set({game_state:"end"});
            }
            
        },
        get_content_test_html()
        {
            let html = `<div class="content_game">
            <div class="game_top">
                <div >
                    
                </div>
                <div class="timer_game">0:07</div>
                <div class="close_game" close_test>
                    <img src="img/game/close.png">
                </div>
            </div>
            <div id="question_name" class="head_content"> Вопрос 3/15
            </div>
            <div class="middle_game">
                <div >
                    

                </div>
                <div class="question_text_test">
                    Как сделать текст жирным?
                </div>
                <div class="answer_list">
                    <div class="answer_item">
                        <div class="answer_number">1</div>
                        <div class="answer_item_bg" answer_state="off" answer_1>
                            <div class="answer_item_text">С помощью тега "strong"</div>
                        </div>
                        
                    </div>
                    <div class="answer_item">
                        <div class="answer_number">2</div>
                        <div class="answer_item_bg" answer_state="on" answer_2>
                            <div class="answer_item_text">С помощью тега "b"</div>
                        </div>
                        
                    </div>
                    <div class="answer_item">
                        <div class="answer_number">3</div>
                        <div class="answer_item_bg" answer_state="off" answer_3>
                            <div class="answer_item_text">С помощью тега "p"</div>
                        </div>
                        
                    </div>
                    <div class="answer_item">
                        <div class="answer_number">4</div>
                        <div class="answer_item_bg" answer_state="off" answer_4>
                            <div class="answer_item_text">С помощью тега "a"</div>
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
        </div>`;
            return html;
        }

    }
    return test;
}()