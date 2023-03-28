Repro:

1. deploy on vercel
2. open deployed site on a path with 2 parts (like x/x) (https://vercel-next-bug-dynamic-param-fy6g23d6i-xmorse.vercel.app/x/x as an example)
3. the slug param will be ['x/x'] instead of ['x', 'x']
