import Router from 'koa-router';

const router = new Router();
router.get("/health", async ctx => {
  try {
    ctx.body = {
      success: true,
      works: 'great',
      timeStamp: new Date(),
      upTime: process.uptime()
    }
  } catch(error) {
    console.log(error);
    ctx.body = {
      success: false
    }
  }
});

export default router;