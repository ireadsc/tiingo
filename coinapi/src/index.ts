import { expose, util } from '@chainlink/ea-bootstrap'
import { makeExecute } from './adapter'
import { makeConfig } from './config'

const NAME = 'COINAPI'

export = { NAME, makeExecute, makeConfig, ...expose(util.wrapExecute(makeExecute())) }
