# OneMessage robot action

![](https://github.com/cmcc-ict/onemessage-notify-action/workflows/onemessage/badge.svg)

Github action for sending onemessage robot messages

## ✨ Example Usage

```yml
- name: onemessage robot message
uses: cmcc-ict/onemessage-notify-action@master
with:
  url: ${{ secrets.ONEMESSAGE_WEBHOOK}}
  msg: hello world
```
🔐 Set your secrets here: `https://github.com/USERNAME/REPO/settings/secrets`.

**Result**

![result of example ssh workflow](result.png)

 

 