# Define our project
project(
    'filebrowser',
    version: '0.0.1',
    license: ['GPL-3.0-or-later'],
    meson_version: '>= 0.59.0'
)

APP_ID = 'org.example.filebrowser'

# Import the modules
gnome = import('gnome')

# gst_ver = '>= 1.20.0'
# gst_ver = '>= 1.22'
gst_ver = '>= 1.20.1'


filebrowser_deps = [
  dependency('gstreamer-1.0', version: gst_ver),
  dependency('gstreamer-gl-1.0', version: gst_ver),
  dependency('gstreamer-play-1.0', version: gst_ver)
]

# gst_dep = dependency('gstreamer-1.0',
#   version: gst_ver,
#   required: false,
# )

# Load instructions from subdirectories
subdir('data')
subdir('src')

#executable('main', 'src/main.js', dependencies: filebrowser_deps)