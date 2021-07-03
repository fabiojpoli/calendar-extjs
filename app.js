/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Calendar.Application',

    name: 'Calendar',

    requires: [
        // This will automatically load all classes in the Calendar namespace
        // so that application classes do not need to require each other.
        'Calendar.*'
    ],

    // The name of the initial view to create.
    mainView: 'Calendar.view.main.Main'
});
