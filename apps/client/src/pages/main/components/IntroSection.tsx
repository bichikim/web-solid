export const IntroSection = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img
          alt="intro-image"
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl w-[256px] h-[400px]"
        />
        <div class="flex flex-col gap-5">
          <h1 class="text-5xl font-bold">
            NCEX NFT Trade <br /> Your NFT navigator
          </h1>
          <h2 class="text-3xl">For the curious! The easiest way to discover web3 applications</h2>
          <h2 class="text-3xl">Coming soon</h2>
          <span class="countdown font-mono text-2xl">
            <span style={{'--value': '10'}} />h<span style={{'--value': '24'}} />m
            <span style={{'--value': '50'}} />s
          </span>
        </div>
      </div>
    </div>
  )
}
