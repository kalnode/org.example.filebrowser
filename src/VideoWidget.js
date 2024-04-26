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
        // VideoFile: GObject.ParamSpec.string(
        //     'videoFile'
        // ),
        VideoFile: GObject.ParamSpec.string(
            'video-file', // name
            'Video File', // nick
            'The text displayed by the widget', // blurb
            GObject.ParamFlags.READWRITE, // flags
            '' // default value
        ),
        VideoFileActual: GObject.ParamSpec.string(
            'video-file-actual', // name
            'Video File Actual', // nick
            'The text displayed by the widget', // blurb
            GObject.ParamFlags.READWRITE, // flags
            '' // default value
        ),
    }
    // Signals: {
    //     'button-clicked': {},
    // },
}, class extends Gtk.Widget {

    constructor(params={}) {
        super(params);

        //log('Video mounted 111');

      //  var video = this;
       // video.file = Gio.File.new_for_path("./assets/video/file_example_MP4_640_3MG.mp4");

        //log('Video mounted 222', video);

        //console.log("Video file 111 is", video.file)

        //console.log("Video file 222 is", video._videoFile)


        //let builder = Gtk.Builder.new();
       // let videoPlayerInstance = builder.get_object('videoActual');
        //console.log("videoPlayerInstance is", videoPlayerInstance)

        //log('videoFile is:', videoFile);
        // const click_gesture = new Gtk.GestureClick();

        // click_gesture.connect("pressed", () => {
        //     const media_stream = video.media_stream;
        //     if (media_stream.playing) {
        //       media_stream.pause();
        //     } else {
        //       media_stream.play();
        //     }
        //   });
        //   video.add_controller(click_gesture);

    }

    get videoFile() {
        log('get videoFile(): ', this._videoFile);
        return this._videoFile;
    }

    set videoFile(value) {
        log('set videoFile() value: ', value);
        // Do nothing if the new value is the same as the old one
        if (this._videoFile === value)
            return;
        // Store the value in an internal property
        this._videoFile = value;
        // Notify that the value has changed


        const filepath = GLib.build_filenamev([GLib.get_home_dir(), value]);
        log('filepath is: ', filepath);
        
        //const file = Gio.File.new_for_path(filepath);
        //log('file is: ', file);

       // const file2 = Gio.File.new_for_uri(filepath);
       // log('file2 is: ', file2);
                //videoPlayerInstance.file = file2;

       // let builder = Gtk.Builder.new();
       // const videoPlayerInstance = builder.get_object('videoActual');
       // console.log("videoPlayerInstance is", videoPlayerInstance)


        console.log("this._videoActual is", this._videoActual)
        //this._videoActual.file = Gio.File.new_for_uri(filepath);

        this._videoActual.set_resource('/org/example/filebrowser/ui/file_example_MP4_640_3MG.mp4')
        
        
        //this.videoFileActual(file); //Gio.File.new_for_path(file);
        console.log("this._videoActual Video file 111 is", this._videoActual.file)


        //this._videoActual.set_autoplay(true);
        console.log("this._videoActual Video file 111 is", this._videoActual)

        this._videoActual.media_stream.play();

        this.notify('video-file');
    }

    get videoFileActual() {
        log('get videoFileActual(): ', this._videoFileActual);
        return this._videoFileActual;
    }

    set videoFileActual(value) {
        log('set videoFileActual() value: ', value);
        this._videoFileActual = value;
        this.notify('video-file-actual');
    }
});
