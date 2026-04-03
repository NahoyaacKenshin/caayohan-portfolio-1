export function Map() {
    return (
        <div className="w-full rounded-lg overflow-hidden border h-72 md:h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.127709644555!2d123.94880357503446!3d10.251282589867303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af5262352e3%3A0x8ce84695aa7af695!2sKamolinas%20Rd%2C%20Poblacion%2C%20Cordova%2C%20Cebu!5e0!3m2!1sen!2sph!4v1775206382861!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}    