import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import Gio from "gi://Gio";
import GLib from 'gi://GLib';

export const VideoWidget = GObject.registerClass({
    GTypeName: 'FbrVideoWidget',
    CssName: 'video',
    Template: 'resource:///org/example/filebrowser/ui/VideoWidget.ui',
    InternalChildren: ['videoActual'],
    Properties: {
        VideoFile: GObject.ParamSpec.string(
            'video-file', // name
            'Video File', // nick
            'The text displayed by the widget', // blurb
            GObject.ParamFlags.READWRITE, // flags
            '' // default value
        ),
    }
}, class extends Gtk.Widget {

    constructor(params={}) {
        super(params);

        log('Video mounted');

    }

    get videoFile() {
        log('get videoFile(): ', this._videoFile);
        return this._videoFile;
    }

    set videoFile(value) {
        log('set videoFile() value: ', value);
        if (this._videoFile === value) return;
        this._videoFile = value;

        const filepath = GLib.build_filenamev([GLib.get_home_dir(), value]);
        log('filepath is: ', filepath);

        //this._videoActual.file = Gio.File.new_for_uri(filepath);
        //this.videoFileActual(file); //Gio.File.new_for_path(file);
        this._videoActual.set_resource('/org/example/filebrowser/ui/file_example_MP4_640_3MG.mp4')

        //this._videoActual.set_autoplay(true);

        this._videoActual.media_stream.play(); // LOG: ERROR OCCURS HERE

        this.notify('video-file');
    }

});
