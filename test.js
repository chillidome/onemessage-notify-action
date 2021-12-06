const axios = require('axios');


async function main(){

    const url = "http://117.132.184.53:9005/room/pushToRobot";
    const msg = "你好\n中国";
    const robotKey = "your token";
    let payload = {
      robotKey,
      msg
    }
    
    // const ret = await axios.post(url, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: payload
    // });
    const ret = await axios.get(url + '?' + new URLSearchParams(payload).toString());

    console.log(ret);
}

main();

