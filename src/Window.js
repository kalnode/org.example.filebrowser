import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

export const Window = GObject.registerClass({
    GTypeName: 'FbrWindow',
    Template: 'resource:///org/example/filebrowser/ui/Window.ui',
    InternalChildren: ['viewStack'],
}, class extends Gtk.ApplicationWindow {
    constructor(params={}) {
        super(params);
        this.#setupActions();
    }

    vfunc_close_request() {
        super.vfunc_close_request();
        this.run_dispose();
    }

    #setupActions() {
        // Create the action
        const changeViewAction = new Gio.SimpleAction({
            name: 'change-view',
            parameterType: GLib.VariantType.new('s'),
        });

        // Connect to the activate signal to run the callback
        changeViewAction.connect('activate', (_action, params) => {
            this._viewStack.visibleChildName = params.unpack();
        });

        // Add the action to the window
        this.add_action(changeViewAction);
    }
});
