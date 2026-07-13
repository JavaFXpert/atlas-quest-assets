# Atlas Quest asset viewer

A dependency-free static viewer for Atlas Quest visual assets. Open `index.html` directly, or serve the folder locally:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Adding another visual asset

1. Put the file in `assets/`.
2. Add an entry to the `assets` array in `script.js`.
3. Add a matching thumbnail button in `index.html`.

The sidebar includes a reserved audio area that can be replaced with an HTML `<audio controls>` player when audio assets are available.
