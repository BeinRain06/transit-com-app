## Twitter - authorize a request

### CREATE oauth_signature parameter

### resource

> Link details : [https://docs.x.com/resources/fundamentals/authentication/oauth-1-0a/creating-a-signature](https://docs.x.com/resources/fundamentals/authentication/oauth-1-0a/creating-a-signature)

### Example

Post request basics structure :

- one query parameter in the url request :

  `include_entities`

- one parameter in the body request :

  `status`

```HTTP
POST /1.1/statuses/update.json?include_entities=true HTTP/1.1
  Accept: */*
  Connection: close
  User-Agent: OAuth gem v0.4.4
  Content-Type: application/x-www-form-urlencoded
  Content-Length: 76
  Host: api.x.com

  status=Hello%20Ladies%20%2b%20Gentlemen%2c%20a%20signed%20OAuth%20request%21

```

### 1. Identify the METHOD request and BASE_URL

- Method `POST`
- BASE_URL = `  https://api.x.com/1.1/statuses/update.json`

<br/>

### 2. Write parameters in alphabetic orders in your structured request:

This are the whole parameters to include + **oauth_signature** further in the right position :

```express
  status	Hello Ladies + Gentlemen, a signed OAuth request!

  include_entities	true
  oauth_consumer_key	xvz1evFS4wEEPTGEFPHBog
  oauth_nonce	kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg
  oauth_signature // ? (unknown for now)
  oauth_signature_method	HMAC-SHA1
  oauth_timestamp	1318622958
  oauth_token	370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb
  oauth_version	1.0
```

<br/>

### 2. build the oauth_string :

#### 2.1 Getting the signature base string ( byte-by-byte to a string DST)

- 1. method `POST`

     ---> **string** : `POST`

- 2. BASE_URL `(https://api.x.com/1.1/statuses/update.json)`

     ---> **string** : `https%3A%2F%2Fapi.x.com%2F1.1%2Fstatuses%2Fupdate.json`

- 3. parameter `include_entities true`

     ---> **string** : `include\_entities%3Dtrue`

- 4. parameter `oauth_consumer_key	xvz1evFS4wEEPTGEFPHBog`

     ---> **string** : `oauth\_consumer\_key%3Dxvz1evFS4wEEPTGEFPHBog%26`

- 5. parameter `oauth_nonce	kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg`

     ---> **string** : `oauth\_nonce%3DkYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg%26`

- 6. parameter ` oauth_signature_method	HMAC-SHA1`

     ---> **string** : `oauth\_signature\_method%3DHMAC-SHA1%26`

- 7. parameter `oauth_timestamp	1318622958`

     ---> **string** : `oauth\_timestamp%3D1318622958%26`

- 8. parameter `oauth_token	370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb`

     ---> **string** : `oauth\_token%3D370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb%26`

- 9. parameter `oauth_version	1.0`

     ---> **string** : `oauth_version%3D1.0%26`

- 3. parameter `status	Hello Ladies + Gentlemen, a signed OAuth request!`

     ---> **string** : `status%3DHello%2520Ladies%2520%252B%2520Gentlemen%252C%2520a%2520signed%2520OAuth%2520request%2521`

We join all these new string separated with he symbol `&` for the two first parameter then his url symbol equivalence `%26` for the rest tohave the **signature base string**.

**signature base string**:

> POST&https%3A%2F%2Fapi.x.com%2F1.1%2Fstatuses%2Fupdate.json&include_entities%3Dtrue&oauth_nonce%3DkYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4c%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1318622958%26oauth_token%3D370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb%26oauth_version%3D1.0%26status%3DHello%2520Ladies%2520%252B%2520Gentlemen%252C%2520a%2520signed%2520OAuth%2520request%2521

 <br/>
<br/>

**Parsing Encoding Resource** :

Link: [https://docs.x.com/resources/fundamentals/authentication/oauth-1-0a/percent-encoding-parameters](https://docs.x.com/resources/fundamentals/authentication/oauth-1-0a/percent-encoding-parameters)

#### 2.2 Getting a signing key

Combine the **comsumer secret** (TWITTER_API_SECRET) & the **oauth_token_secret** (TWITTER_ACCESS_TOKEN_SECRET)

**signing key** = **TWITTER_API_SECRET&TWITTER_ACCESS_TOKEN_SECRET**

**example** :

consumer_secret = kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw

OAuth token secret = LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE

**signing key** = kAcSOqF21Fu85e7zjz7ZN2U4ZRhfV3WpwPAoE3Z7kBw&LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE&oauth_consumer_key%3Dxvz1evFS4wEEPTGEFPHBog%26&

#### 2.3 Calvulating the signature (oauth_signature)

Finally, the `signature` is calculated by passing the **signature base string** and **signing key** to the `HMAC-SHA1 hashing algorithm`.

The details of the algorithm are explained as `hash_hmac function`.

The output of the HMAC signing function is a binary string. This needs to `be base64 encoded` to produce the signature string.

### Code source: implement **Hmac_Sha1** with base64 Convertion

Link : [https://github.com/gits2501/Hmac_Sha1](https://github.com/gits2501/Hmac_Sha1)

For example, the output given the **base string** and **signing key** given on this page is 2E CF 77 84 98 99 6D 0D DA 90 5D C7 17 7C 75 07 3F 3F CD 4E. That value, when `converted to base64`, is the OAuth signature for this request:

OAuth signature = Ls93hJiZbQ3akF3HF3x1Bz8/zU4=

## N.B : specifications belonging

All our above explanation frame the use of **Oauth 1.0a User Context** where one of the goals is to access or perform a X `(twitter)` action on behalf of a X `twitter` account

For Example : post the text **“Hello Ladies + Gentlemen, a signed OAuth request!”** as a `Tweet`

<br/>

## Request using Callback Url

For **request** intend to reack a **callback url** set the request format according the documetation of **OAuth 2.0 Authorization Code Flow with PKCE**

#### `Link` : [https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/authorization-code](https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/authorization-code)
