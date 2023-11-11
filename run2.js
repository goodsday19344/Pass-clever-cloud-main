#!/bin/sh
UUID=${UUID:-'1edf1c59-4b8b-48ea-8af6-524ab1f0afa4'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
