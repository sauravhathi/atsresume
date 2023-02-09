import FormButton from "./FormButton"

const SocialMedia = ({ resumeData, handleSocialMedia, addSocialMedia, removeSocialMedia }) => {
    return (
        <div className="flex-col-gap-2">
            <h2 className="input-title">Social Media</h2>
            {resumeData.socialMedia.map((socialMedia, index) => (
                <div key={index} className="flex-wrap-gap-2">
                    <input
                        type="text"
                        placeholder="Social Media"
                        name="socialMedia"
                        className="other-input"
                        value={socialMedia.socialMedia}
                        onChange={(e) => handleSocialMedia(e, index)} />
                    <input
                        type="text"
                        placeholder="Link"
                        name="link"
                        className="other-input"
                        value={socialMedia.link}
                        onChange={(e) => handleSocialMedia(e, index)} />
                </div>
            ))}
            <FormButton size={resumeData.socialMedia.length} add={addSocialMedia} remove={removeSocialMedia} />
        </div>
    )
};


export default SocialMedia;