const core = require('@actions/core');
const axios = require('axios');

async function run () {
  try {
    const url = core.getInput('url');
    const msg = core.getInput('msg');
    const robotKey = core.getInput('robotKey');
    const failWhenError = core.getInput('failWhenError') || false;
    let payload = {
      robotKey,
      msg
    }
    
    // const ret = await axios.post(url, {
    //   headers: {
    //     'Content-Type': 'x-www-form-urlencoded'
    //   },
    //   data: new URLSearchParams(payload).toString()
    // });

    const ret = await axios.get(url + '?' + new URLSearchParams(payload).toString());


    console.log('response:', ret.data);

  } catch (error) {
    console.error(error);
    if(failWhenError){
      core.setFailed(error.message);
    }
      
  }
}

run();