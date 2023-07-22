---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
highlight: false
content: {{ .Name }}
eventDate: {{ index (split .Date "T") 0 }}
---
