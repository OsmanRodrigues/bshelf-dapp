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
    - access the cartesi blockchain explorer in your browser to send a raw input transaction with the hex sample
  ```sh 
  http://localhost:8080/explorer/
  ```
  
  - [demo](https://drive.google.com/file/d/1kNrTiWHyj9T0D1I0Xn_NN3dy1EqZT_wH/view?usp=sharing)
    <div>
        <video width="100%" controls>
            <source src="docs/videos/create-shelf.mp4" type="video/webm">
        </video>
    </div>


* #### addReadingItem
  ```js
    description — add a reading item to a given shelf.
    param required — {shelf: UUID, title: string}
    param not required — {description: string, content: string, contentType: plainText | url | html}
  ```
  data sample
  ```json
    {
        "action":"addReadingItem", 
        "data":{
            "shelf":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5", 
            "title":"My first notebook", 
            "content":"<h1>hi</h1>", 
            "contentType":"html"
        }
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a2261646452656164696e674974656d222c202264617461223a7b227368656c66223a2264386330346137622d653230372d346466622d613164322d633634653964303963396535222c20227469746c65223a224d79206669727374206e6f7465626f6f6b222c2022636f6e74656e74223a223c68313e68693c2f68313e222c2022636f6e74656e7454797065223a2268746d6c227d7d
  ```
  interact
    - access the cartesi blockchain explorer in your browser to send a raw input transaction with the hex sample
  ```sh 
  http://localhost:8080/explorer/
  ```
  
  - [demo](https://drive.google.com/file/d/1kDkIPIj1fZoHEkvDyswSTlQwh-gtF4Hy/view?usp=sharing)
    <div>
        <video width="100%" controls>
            <source src="" type="video/webm">
        </video>
    </div>

### Inspect handlers 
* #### getAllShelfs
  ```js
    description — get all shelfs.
  ```
  returned hex sample
  ```json
    {
        "status": "Accepted",
        "exception_payload": null,
        "reports": [
            {
                "payload": "0x..."
            }
        ],
        "processed_input_count": 2
    }
  ```
  converted payload sample
  ```json 
    [
        {
            "id":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
            "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "createdAt":8034,
            "items":{}
        }
    ]

  ```
  interact
    - access the cartesi inspect endpoint on your browser
  ```sh 
  http://localhost:8080/inspect/getAllShelfs
  ```

* #### getShelfById
  ```js
    description — get a shelf by given id.
    param data — shelf id (UUID)
  ```
  returned hex sample
  ```json
    {
        "status": "Accepted",
        "exception_payload": null,
        "reports": [
            {
                "payload": "0x..."
            }
        ],
        "processed_input_count": 2
    }
  ```
  converted payload sample
  ```json 
    {
        "data":{
            "details":{
                "id":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
                "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
                "createdAt":8034
            },
            "items":[
                {
                    "id":"3d359a94-becc-4b7d-aedf-4e395007802c",
                    "shelf":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
                    "addedAt":8503,
                    "title":"My first notebook",
                    "content":"<h1>hi</h1>",
                    "contentType":"html"
                }
            ]
        }
    }
  ```
  interact
    - access the cartesi inspect endpoint on your browser
  ```sh 
  http://localhost:8080/inspect/getShelfById/$shelfId
  ```

* #### getItemById
  ```js
    description — get a shelf item by a given both shelf and item id.
    param data — shelf id (UUID)
  ```
  returned hex sample
  ```json
    {
        "status": "Accepted",
        "exception_payload": null,
        "reports": [
            {
                "payload": "0x..."
            }
        ],
        "processed_input_count": 2
    }
  ```
  converted payload sample
  ```json 
    {
        "details":{
            "id":"3d359a94-becc-4b7d-aedf-4e395007802c",
            "shelf":"d8c04a7b-e207-4dfb-a1d2-c64e9d09c9e5",
            "addedAt":8503,
            "title":"My first notebook",
            "content":"<h1>hi</h1>",
            "contentType":"html"
        }
    }
  ```
  interact
    - access the cartesi inspect endpoint on your browser
  ```sh 
  http://localhost:8080/inspect/getItemById/$shelfId/$readingItemId
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>