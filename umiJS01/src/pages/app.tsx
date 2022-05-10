let isSubApp = false;
export function modifyClientRenderOpts(memo:any) {
    console.log('memo',memo)
    return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,    
  };
}