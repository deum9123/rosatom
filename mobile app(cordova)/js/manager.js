let manager = function()
{
    let manager = 
    {
        change_tab(tab_name)
        {
            store.set({tab:tab_name});
        }
        
    };
    manager.change_tab.call(manager, "tab_profile");
    tab_profile.show.call(tab_profile);
    return manager;
}()