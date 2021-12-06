# OneMessage robot action

![](https://github.com/cmcc-ict/onemessage-notify-action/workflows/onemessage/badge.svg)

Github action for sending onemessage robot messages

## ✨ Example Usage

```yml
- name: onemessage robot message
uses: cmcc-ict/onemessage-notify-action@master
with:
  url: http://117.132.184.53:9005/room/pushToRobot
  robotKey: ${{ secrets.ROBOT_KEY}}
  failWhenError: false
  msg: hello world
```
🔐 Set your secrets here: `https://github.com/USERNAME/REPO/settings/secrets`.

**Result**

![result of example ssh workflow](result.png)

 

 