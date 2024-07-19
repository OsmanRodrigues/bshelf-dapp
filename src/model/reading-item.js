import crypto from 'node:crypto';

export const ReadingItemContentType = {
    plainText: 'plainText',
    url: 'url',
    html: 'html',
};

export class ReadingItem {
    id;
    shelf;
    addedAt;
    title;
    description;
    content;
    contentType;

    /**
     
     * ### ReadingItem model 
    
     * **required data:**

     * shelf: UUID
     
     * title: string

     * **not required data:**

     * description: string
     
     * content: string

     * contentType: plainText | url | html
     
    */
    constructor({ shelf, title, description, content, contentType }) {
        this.shelf = shelf;
        this.title = title;
        this.id = crypto.randomUUID();
        this.addedAt = Date.now();
        this.description = description;
        this.content = content;

        if (contentType && ReadingItemContentType[contentType]) {
            this.contentType = ReadingItemContentType[contentType];
        } else if (contentType && !ReadingItemContentType[contentType]) {
            throw { error: 'Invalid content type.' };
        }
    }

    /**
     * ### ReadingItem getData
     
     * return reading item basic data.

     * id: UUID

     * shelf: UUID

     * addedAt: number

     * title: string

     * description: string

     * content: string
    
     * contentType: plainText | url | html

     */
    getData() {
        return {
            id: this.id,
            shelf: this.shelf,
            addedAt: this.addedAt,
            title: this.title,
            description: this.description,
            content: this.content,
            contentType: this.contentType,
        };
    }
}
