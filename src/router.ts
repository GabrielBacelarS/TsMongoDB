import { Router, Request, Response } from 'express'
import { connect } from 'http2'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  console.log('API working')
  res.json({
    connection: true,
  })
})

export default router
