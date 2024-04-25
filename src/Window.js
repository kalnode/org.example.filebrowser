import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

export const Window = GObject.registerClass({
    GTypeName: 'FbrWindow',
    Template: 'resource:///org/example/filebrowser/ui/Window.ui',
}, class extends Gtk.ApplicationWindow {
    vfunc_close_request() {
        super.vfunc_close_request();
        this.run_dispose();
    }
});
