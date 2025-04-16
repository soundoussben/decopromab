
interface TestimonialProps {
  content: string;
  author: string;
  position?: string;
  image?: string;
}

const Testimonial = ({ content, author, position, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex flex-col h-full">
        <div className="mb-4 text-decopromab-red">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.144l.138-.182c.668-.878 1.43-1.652 2.286-2.32.857-.666 1.58-1.107 2.17-1.326.59-.218 1.027-.365 1.306-.44.28-.073.65-.22 1.12-.44l.308-.124c.32-.133.5-.27.55-.413.132-.31.196-.65.196-1.01 0-.44-.07-.83-.196-1.17-.13-.34-.5-.86-1.12-1.56-.61-.7-1.14-1.18-1.59-1.44-.45-.26-.96-.39-1.53-.39-.56 0-1.06.13-1.51.39-.45.26-.95.74-1.52 1.42-.56.69-1.12 1.7-1.67 3.03-.55 1.32-.83 2.74-.83 4.26 0 .42.03.84.1 1.26.07.42.15.78.24 1.08.1.3.29.54.58.71.29.17.59.26.91.26.32 0 .65-.09.99-.26.34-.17.62-.4.85-.71.23-.31.39-.61.49-.91.1-.3.15-.63.15-.98zm9.43 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.507.144l.138-.182c.668-.878 1.43-1.652 2.286-2.32.857-.666 1.58-1.107 2.17-1.326.59-.218 1.027-.365 1.306-.44.28-.073.65-.22 1.12-.44l.308-.124c.317-.132.497-.27.547-.413.13-.31.196-.65.196-1.01 0-.44-.066-.83-.196-1.17-.13-.34-.503-.86-1.12-1.56-.616-.7-1.146-1.18-1.59-1.44C20.59.69 20.08.56 19.5.56c-.56 0-1.06.13-1.51.39-.45.26-.96.74-1.52 1.42-.56.69-1.12 1.7-1.67 3.03-.55 1.32-.83 2.74-.83 4.26 0 .42.03.84.1 1.26.06.42.14.78.23 1.08.09.3.29.54.58.71.29.17.6.26.92.26.32 0 .65-.09.99-.26.34-.17.62-.4.85-.71.23-.31.39-.61.49-.91.1-.3.15-.63.15-.98z" fillRule="nonzero" />
          </svg>
        </div>
        <p className="text-decopromab-black/80 italic flex-grow">{content}</p>
        <div className="mt-6 flex items-center">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={author} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-bold text-decopromab-black">{author}</p>
            {position && <p className="text-sm text-decopromab-black/60">{position}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
