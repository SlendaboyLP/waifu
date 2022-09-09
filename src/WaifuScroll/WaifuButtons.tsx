import React from 'react'
import './WaifuButtons.css'
import { saveAs } from 'file-saver';

export default function WaifuButtons({currentWaifu}:any) {

  // const download = (waifu:any) => {
  //   fetch(waifu.images[0].url, {
  //     method: "GET",
  //     headers: {},
  //     mode: "no-cors"
  //   })
  //     .then(response => {
  //       response.arrayBuffer().then(function(buffer) {
  //         const url = window.URL.createObjectURL(new Blob([buffer]));
          
  //         const link = document.createElement("a");
  //         link.href = url;
  //         console.log(link.href)
  //         link.setAttribute("download", waifu.images[0].file + waifu.images[0].extension); 
  //         document.body.appendChild(link);
  //         link.click();
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // function download(fileUrl:string, fileName:string) {
  //   let a = document.createElement("a");
  //   a.href = fileUrl;
  //   a.target = "_blank";
  //   a.setAttribute("download", fileName);
  //   a.click();
  //  }

  
  return (
    <div className='waifu-buttons'>
      <button>Upvote</button>
      <button>Downvote</button>
      <button>Save to Collection</button>
      <button>Download</button>
      {/* <button onClick={() => download(currentWaifu)} >Download</button> */}
      {/* <button onClick={() => download(currentWaifu.images[0].url, currentWaifu.images[0].file + currentWaifu.images[0].extension)} >Download</button> */}
    </div>
  )
}
