<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Bshelf dapp</h3>

  <p align="center">
    The Bshelf (blockchain shelf) dapp documentation.
  </p>
</div>

## About
<p>
    Bshelf is decentralized application (dapp) powered by <a href="https://docs.cartesi.io/cartesi-rollups/1.3/">cartesi</a> rollups technology.
</p>
<p> 
    It's a digital readings shelf to estimulate people to reading and share knowledge with the benefits of the blockchain (ownership assurance, secure and reliable reward, decentralized network, etc.).
</p>

## Getting Started

Below you'll find instructions on how setting up this dapp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) 

* [docker](https://docs.docker.com/get-docker/)

* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/OsmanRodrigues/bshelf-dapp.git
   ```
2. Install NPM packages
   ```sh
   yarn  install
   ```
3. Build and run the dapp via `cartesi-cli`
   ```sh
   cartesi build 
   ```
   and
   ```sh
   cartesi run 
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Here you can access the examples of dapp communication and resources consume.

There are these resources available on this dapp:

### Advanced handlers
* #### createShelf
  ```js
    description — create a shelf.
    param data — {owner: address ("0x...")} 
  ```
  data sample
  ```json
    {
        "action":"createShelf", 
        "data":{
            "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        }
    } 
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226372656174655368656c66222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636227d7d
  ```
  interact
    - access the cartesi blockchain explorer in you browser to send a raw transaction
  ```sh 
  http://localhost:8080/explorer/
  ```
  
  - demo 
    <div>
        <video width="100%" controls>
            <source src="docs/videos/create-shelf.mp4" type="video/webm">
        </video>
    </div>


- addReadingItem

### Inspect handlers 
- getAllShelfs
- getShelfById
- getItemById

<p align="right">(<a href="#readme-top">back to top</a>)</p>