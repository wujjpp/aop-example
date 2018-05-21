/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import run from './run'
import clean from './clean'
import { copyPkg, copyEnvConfig } from './copy'
import buildServer from './build-server'
import { getEnv } from './libs/utils'

async function build() {
  const env = getEnv()
  await run(clean)
  await run(copyEnvConfig, env)
  await run(copyPkg)
  await run(buildServer, env)
}
export default {
  name: 'build all',
  func: build
}
