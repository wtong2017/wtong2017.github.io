# wtong2017.github.io

Personal website built using [Hugo](https://gohugo.io/).

## How to run

```sh
hugo server -D
```

## Publications

`data/publications.yml` is the canonical publication catalog. Add or edit a
publication there; do not create individual files under `content/publications/`.
Publication thumbnails live in `static/img/`, and each catalog entry refers to
its thumbnail by filename in the `image` field.

The `year` field is intended for reuse by other websites. For example, the VVAI
Lab website can include lab-era publications by selecting entries whose year is
2024 or later.
