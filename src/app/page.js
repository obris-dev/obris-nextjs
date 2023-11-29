import Image from 'next/image'


export default function ObrisWelcome() {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/obris-square-dark.png"
                width={576}
                height={384}
                alt="Obris Logo"
                className="object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome to Obris!
              </h2>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nisi scelerisque dui bibendum 
                facilisis sed sit amet enim. Mauris malesuada tellus mi. Cras metus sem, molestie in mi a, viverra blandit augue. 
                Phasellus pellentesque faucibus urna finibus gravida. Nullam congue auctor ipsum in elementum. Vivamus eget maximus nisi. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;              
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}