# EduCred NFT — Academic Credential Verification (Ethereum)

Each credential is an ERC-721 token with:
- **On-chain keccak256 hash** of the canonical credential JSON.
- **Metadata URI** (e.g., `ipfs://.../metadata.json`) for human-readable details.
- **Role-based issuing** (`ISSUER_ROLE`), **revocation**, and **pausing**.

## Quick start
```bash
# 1) Clone & install
npm i

# 2) Configure
cp .env.example .env
# Edit .env: PRIVATE_KEY, SEPOLIA_RPC, etc.

# 3) Compile & test
npm run compile
npm test

# 4) Deploy (Sepolia)
npm run deploy:sepolia
# Copy deployed address -> .env CONTRACT_ADDRESS

# 5) Mint an example credential
npm run mint:sepolia

# 6) Verify (script)
npm run verify:onchain
