export function shortenAddress(str = '') {
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`
}

export function getIpfsUrl(uri: string): string | undefined {
  const ipfsGateway = `https://${import.meta.env.VITE_IPFS_GATEWAY}`
  if (!uri) return undefined
  const uriScheme = uri.split('://')[0]
  if (uriScheme === 'ipfs')
    return uri.replace('ipfs://', `${ipfsGateway}/ipfs/`)
}
