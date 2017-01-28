class SimpleCandySerializer < ActiveModel::Serializer
  attributes :name, :url, :id

  def url
    object.image_url
  end
end
