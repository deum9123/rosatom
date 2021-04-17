$("#tab_island").bind('click',  manager.change_tab.bind(manager, "tab_island"));
$("#tab_profile").bind('click',  manager.change_tab.bind(manager, "tab_profile"));
$("#tab_event").bind('click',  manager.change_tab.bind(manager, "tab_event"));
$("#tab_forum").bind('click',  manager.change_tab.bind(manager, "tab_forum"));
$("#tab_game").bind('click',  manager.change_tab.bind(manager, "tab_game"));
$("#tab_intern").bind('click',  manager.change_tab.bind(manager, "tab_intern"));


/*event store */
store.add_listener("tab", tab_island.show.bind(tab_island));
store.add_listener("tab", tab_profile.show.bind(tab_profile));
store.add_listener("tab", tab_event.show.bind(tab_event));
store.add_listener("tab", tab_forum.show.bind(tab_forum));
store.add_listener("tab", tab_game.show.bind(tab_game));
store.add_listener("tab", tab_intern.show.bind(tab_intern));
store.add_listener("theme_name", theme.change.bind(theme));
store.add_listener("tabs_state", theme.tabs_change.bind(theme));
