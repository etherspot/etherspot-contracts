#!/usr/bin/env bash

for ARG in "$@"
do
  case $ARG in
    "--log-gas-usage" )
      export LOG_GAS_USAGE=1
      ;;
   esac
done

# exit script as soon as a command fails.
set -o errexit

# executes cleanup function at script exit.
trap stop_ganache EXIT

ganache_running() {
  nc -z localhost 8555
}

start_ganache() {
  node_modules/.bin/ganache-cli -g 20000000000 -a 256 -k istanbul -p 8555 --gasLimit 0xfffffffffff -e 1000000 > /dev/null &
  ganache_pid=$!
}

stop_ganache() {
  # Kill the ganache instance that we started (if we started one and if it's still running).
  if [[ -n "$ganache_pid" ]] && ps -p ${ganache_pid} > /dev/null; then
    kill -9 ${ganache_pid}
  fi
}

if ! ganache_running; then
  echo "Starting ganache instance..."
  echo "============================"
  start_ganache
fi

truffle version

node_modules/.bin/truffle test --network test
