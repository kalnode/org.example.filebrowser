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
        VideoFileActual: GObject.ParamSpec.string(
            'video-file-actual', // name
            'Video File Actual', // nick
            'The text displayed by the widget', // blurb
            GObject.ParamFlags.READWRITE, // flags
            '' // default value
        ),
    }
}, class FbrVideoWidget extends Gtk.Box {

    constructor(params={}) {
        super(params);


        // Adding click gesture; see Workbench example
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

        // Triggered by instance of video widget; property passed is "value".
        // Example:
        // <property name="child">
        //     <object class="FbrVideoWidget" id="videoTest">
        //         <property name="video-file">file_example_MP4_640_3MG.mp4</property>
        //     </object>
        // </property>

        log('set videoFile(): ', value);

        // -----------------------------------
        // SET LOCAL REFERENCE
        // -----------------------------------
        // Do nothing if the new value is the same as the old one
            //if (this._video === value)
            //    return;
        // Store the value in an internal property
            //this._video = value;


        // -----------------------------------
        // DIRECTLY GET VIDEO ELEMENT (in template)
        // -----------------------------------
        // Attempt to get video element in template, based on id="videoActual".
        // Keeping code for now. We may not need it since we have a reference to the video element via: InternalChildren: ['videoActual']
        // let builder = Gtk.Builder.new();
        // const videoPlayerInstance = builder.get_object('videoActual');
        // console.log("videoPlayerInstance is", videoPlayerInstance)


        // -----------------------------------
        // LOAD VIDEO FILE
        // -----------------------------------

        // ASSEMBLE FILEPATH
        const filepath = GLib.build_filenamev([GLib.get_home_dir(), value]);
        // ... or ...
        // For testing, get fixed file:
        //const filepath = "./assets/video/file_example_MP4_640_3MG.mp4"
        log('filepath is: ', filepath);

        // CREATE FILE OBJECT
        const file = Gio.File.new_for_path(filepath);
        // const file = Gio.File.new_for_uri(filepath);

        // CHECK FILE EXISTS
        // TODO: Does this work?
        // if (file.query_exists(filepath)) {
            // log("file exists!")
        // }

        // ... or ...

        // MAKE MEDIA OBJECT
        // const media_stream = gtk_video_new_for_media_stream(GTK_MEDIA_STREAM(media_stream));
        const media_stream =  Gtk.MediaFile.new_for_filename(filepath);
        // const media_stream =  Gtk.MediaFile.new_for_file(filepath);
        // const media_stream = Gtk.Video.new_for_media_stream(media_stream);

        // -----------------------------------
        // APPLY VIDEO FILE
        // -----------------------------------
        // Apply video object to video instance

        // Directly pointing to an app resource
        //this._videoActual.set_resource('/org/example/filebrowser/ui/file_example_MP4_640_3MG.mp4');

        // Setting the video file
        //this._videoActual.set_file(file);

        // Setting via media stream
        this._videoActual.set_media_stream(media_stream);


        // -----------------------------------
        // CONFIGURE VIDEO PLAYER
        // -----------------------------------

        log(this._videoActual);

        // SET AUTO PLAY
        // gtk_video_set_autoplay(GTK_VIDEO(video), true);
        this._videoActual.set_autoplay(true);

        // PLAY
        // Play regular
        //this._videoActual.play();
        // Play media stream
        //this._videoActual.media_stream.play();
        

        // MISC LAYOUT STUFF
        this._videoActual.set_hexpand(true);
        this._videoActual.set_vexpand(true);


        // NOTIFY (what? who?) THAT VIDEO UPDATED
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
