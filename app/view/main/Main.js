/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
 Ext.define('Calendar.view.main.Main', {
    extend: 'Ext.Panel',
    requires: ['Ext.calendar.panel.Panel'],
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    layout: 'fit',
    items: {
        xtype: 'calendar',
        store: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/data/calendars.json'
            },
            eventStoreDefaults: {
                proxy: {
                    type: 'ajax',
                    url: 'resources/data/events.json'
                }
            }
        }
    }
});