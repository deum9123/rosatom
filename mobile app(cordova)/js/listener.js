$("#tab_island").bind('click',  manager.change_tab.bind(manager, "tab_island"));
$("#tab_profile").bind('click',  manager.change_tab.bind(manager, "tab_profile"));
$("#tab_event").bind('click',  manager.change_tab.bind(manager, "tab_event"));
$("#tab_forum").bind('click',  manager.change_tab.bind(manager, "tab_forum"));
$("#tab_game").bind('click',  manager.change_tab.bind(manager, "tab_game"));
$("#tab_intern").bind('click',  manager.change_tab.bind(manager, "tab_intern"));
$("#content").on('click','[islands]', tab_island.set_island.bind(tab_island));
$("#content").on('click','[start_game]', tab_game.start_game.bind(tab_game));

$("#content").on('click','[game="quiz"]', tab_game.game_menu_open.bind(tab_game, "quiz"));
$("#content").on('click','[close_game_menu]', game.close_game_menu.bind(game));
$("#content").on('click','[close_game]', game.close_game.bind(game));
$("#content").on('click','[helper_close]', helper.close.bind(helper));
$("#content").on('click','[close_island]', tab_island.close.bind(tab_island));
$("#content").on('click', '[html_island]', tab_island.set_island.bind(tab_island, "html_island"));
$("#content").on('click', '[java_island]', tab_island.set_island.bind(tab_island, "java_island"));
$("#content").on('click', '[eng_island]', tab_island.set_island.bind(tab_island, "eng_island"));
$("#content").on('click', '[mathan_island]', tab_island.set_island.bind(tab_island, "mathan_island"));
$("#content").on('click', '[sopr_island]', tab_island.set_island.bind(tab_island, "sopr_island"));

$("#content").on('click', '[island_item_state = "end"]', html_island.open_modal.bind(html_island, "end"));
$("#content").on('click', '[island_item_state = "arrow"]', html_island.open_modal.bind(html_island, "arrow"));
$("#content").on('click', '[island_item_state = "close"]', html_island.open_modal.bind(html_island, "close"));

$("#content").on('click', '#islands_bottom_right', tab_island.moveToSecondStep.bind(tab_island));
$("#content").on('click', '#islands_bottom_left', tab_island.moveToFirstStep.bind(tab_island));

$("#content").on('click', '.answer_item', game.setActive.bind(game));
$("#content").on('click', '.event_item', tab_event.openEventInfoPopup.bind(tab_event));
$(".eventModal").on('click', '.eventModal-closeBtn', tab_event.closeEventInfoPopup.bind(tab_event));


$("#modal").on('click', '[modal_close]', html_island.close_modal.bind(html_island));
$("#modal").on('click', '[start_test]', html_island.start_test.bind(html_island));
$("#content").on('click','[close_test]', html_island.close_test.bind(html_island));
/*event store */
store.add_listener("tab", tab_island.show.bind(tab_island));
store.add_listener("tab", tab_profile.show.bind(tab_profile));
store.add_listener("tab", tab_event.show.bind(tab_event));
store.add_listener("tab", tab_forum.show.bind(tab_forum));
store.add_listener("tab", tab_game.show.bind(tab_game));
store.add_listener("tab", tab_intern.show.bind(tab_intern));
store.add_listener("theme_name", theme.change.bind(theme));
store.add_listener("tabs_state", theme.tabs_change.bind(theme));
store.add_listener("game_state", game.start_game.bind(game));
store.add_listener("game_menu", game.show_menu.bind(game));
store.add_listener("game_menu_state", tab_game.game_menu_close.bind(tab_game));
store.add_listener("game_state", tab_game.game_close.bind(tab_game));
store.add_listener("island", html_island.open_island.bind(html_island));
store.add_listener("island", java_island.open_island.bind(java_island));
store.add_listener("island", eng_island.open_island.bind(eng_island));
store.add_listener("island", mathan_island.open_island.bind(mathan_island));
store.add_listener("island", sopr_island.open_island.bind(sopr_island));
store.add_listener("modal_state", modal.show.bind(modal));
store.add_listener("modal_state", modal.close.bind(modal));
store.add_listener("test_state", test.show.bind(test));
store.add_listener("test_state", test.close.bind(test));
store.add_listener('currentGameTime', game.setTimeToHTML.bind(game));