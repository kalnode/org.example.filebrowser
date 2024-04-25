import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

export const WelcomeWidget = GObject.registerClass({
    GTypeName: 'FbrWelcomeWidget',
    Template: 'resource:///org/example/filebrowser/ui/WelcomeWidget.ui'
}, class extends Gtk.Widget {});
