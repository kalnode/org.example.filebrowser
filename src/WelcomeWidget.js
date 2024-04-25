import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

export const WelcomeWidget = GObject.registerClass({
    GTypeName: 'FbrWelcomeWidget',
    CssName: 'welcome',
    Template: 'resource:///org/example/filebrowser/ui/WelcomeWidget.ui',
    InternalChildren: ['welcomeLabel'],
    Properties: {
        WelcomeText: GObject.ParamSpec.string(
            'welcome-text', // name
            'Welcome Text', // nick
            'The text displayed by the widget', // blurb
            GObject.ParamFlags.READWRITE, // flags
            '' // default value
        ),
    },
}, class extends Gtk.Widget {
    get welcomeText() {
        // Return a default value if the text hasn't been set yet
        return this._welcomeText || '';
    }

    set welcomeText(value) {
        // Do nothing if the new value is the same as the old one
        if (this._welcomeText === value)
            return;
        // Store the value in an internal property
        this._welcomeText = value;
        // Hide the label if no text is set
        this._welcomeLabel.visible = !!value;
        // Notify that the value has changed
        this.notify('welcome-text');
    }
});
