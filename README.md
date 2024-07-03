Oberon Engineering Pty Ltd
==========================

Misc DNS configuration documentation.

# Setup Website

Setup DNS Zone file for Github Pages for this repo.

```
www.obeeng.com.au. 	14400 	CNAME 	obeeng.github.io
obeeng.com.au. 	14400 	A 	185.199.108.153
obeeng.com.au. 	14400 	A 	185.199.109.153
obeeng.com.au. 	14400 	A 	185.199.110.153
obeeng.com.au. 	14400 	A 	185.199.111.153
obeeng.com.au. 	14400 	AAAA 	2606:50c0:8000::153
obeeng.com.au. 	14400 	AAAA 	2606:50c0:8001::153
obeeng.com.au. 	14400 	AAAA 	2606:50c0:8002::153
obeeng.com.au. 	14400 	AAAA 	2606:50c0:8003::153
```

# Setup BIMI

VMC Certificate files are a scam, so none is included here.

```
default._bimi.obeeng.com.au. 	3600 	TXT 	v=BIMI1;l=https://www.obeeng.com.au/images/bimi_logo.svg;a=
```

That's it!

--
Author: Edward O'Callaghan.
