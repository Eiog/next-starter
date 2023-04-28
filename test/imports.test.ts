describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../app.vue')
    expect(cmp).toBeDefined()
  })

  test('layout imports as expected', async () => {
    // eslint-disable-next-line @typescript-eslint/quotes
    const cmp = await import(`../layouts/default.vue`)
    expect(cmp).toBeDefined()
  })

  test('dynamic imports as expected', async () => {
    const name = 'Hello'
    const cmp = await import(`../components/${name}.vue`)
    expect(cmp).toBeDefined()
  })
})
