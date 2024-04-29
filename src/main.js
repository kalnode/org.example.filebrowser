import 'gi://Gdk?version=4.0';
import 'gi://Gtk?version=4.0';

// This will fail and exit the app at runtime
// pkg.require({
//     'gstreamer-1.0': '1.20.1'
// });

import { Application } from './Application.js';

export function main(argv) {
    return new Application({ 'application-id': pkg.name }).run(argv);
}