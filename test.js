import axios from 'axios';
axios.get("http://localhost:3070/customer/7783502200").then(
    result => {
        console.log(axios.toString());
        if(result.data.toString().startsWith('Error'))
        {
            console.log('Error');
        }
        else
        {
            console.log(result.data);
        }
    },
    error => {alert('error111:'+error);})