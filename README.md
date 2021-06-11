# fitbit-miku-on-stage

![Preview](https://cdn.b3rning14.fr/images/b3/external/fitbit/fitbit-miku-on-stage/fitbit-miku-on-stage.gif)

A Fitbit Versa (1/2/Lite) clock face with miku dancing for your pleasure.

The project is currently in "work in progress" but is already perfectly usable.

## Prerequisites
All you need to get started is [Node.js](https://nodejs.org/en/download/) 8.x+ on macOS, Windows or Linux.

## Build

````shell
$ npm install
$ npx fitbit-build
````

## Activities metrics
- clock
- date
- battery level
- heart rate
- distance
- steps
- calories
- elevation gain

## Permissions and Privacy
Because this clock face shows personal goals & heart rate, it uses these exact same information:

- Personal goals (steps, calories, distance, ...)
- Heart rate sensor
- Body presence

No data is kept nor send to first or third parties entities, companies or individuals. You can check by looking at the source code.

When installing the clock face, it'll ask you for these permissions. You can deny all, some or none. The non-functional activities metrics won't show on the clock face in that case.

## Settings

In the settings, for now, you can reduce animations of miku to save cpu.

## Contributing
Feel free to contribute to this project by:

- Opening a PR with a change proposition
- Opening an issue if
    - you want to propose a new feature
    - or if you encounter a problem
- Pay me a coffee

# Resources
- **Miku Animation :** [Halfne Miku Studio](https://www.deviantart.com/johnsu/art/Halfne-Miku-Studio-396850314) by [JohnSu](https://github.com/Bietol)
- **Background Scene:** [MMD Live Stage Club 2.0](https://www.deviantart.com/philippe-n-12/art/DOWNLOAD-MMD-Live-Stage-Club-2-0-855946375) by [Philippe-N-12](https://www.deviantart.com/philippe-n-12)

# Licence

This project is under Creative Commons Attribution-ShareAlike 4.0 Licence
